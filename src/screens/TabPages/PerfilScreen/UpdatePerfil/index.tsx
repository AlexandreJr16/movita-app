import { ScrollView, StatusBar, View } from "react-native";
import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import cep from "cep-promise";
import LoadingIndicator from "../../../../components/Default/Loading";
import ErrorAlert from "../../../../components/ErrorAlert/ErrorAlert";
import ButtonPerfil from "../../../../components/Perfil/Button";
import HeaderPerfil from "../../../../components/Perfil/HeaderPerfil";
import InputPerfil from "../../../../components/Perfil/Input";
import ShowPerfil from "../../../../components/Perfil/ShowPerfil";
import TitleTextPerfil from "../../../../components/Perfil/TitleText";
import AuthContext from "../../../../contexts/auth.context";
import { updateUserDTO } from "../../../../contexts/dto/updateUser.dto";
import UserContext from "../../../../contexts/user.context";
import styles from "./styles";

// Schema de validação com zod
const schema = z.object({
  nome: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().nonempty("Telefone é obrigatório"),
  endereco: z.string().nonempty("CEP é obrigatório"),
  cpf: z.string().nonempty("CPF/CNPJ é obrigatório"),
});

const UpdatePerfil = ({ navigation }: any) => {
  const { user, loading } = useContext(AuthContext);
  const { updateUser } = useContext(UserContext);

  const defaultValues = {
    nome:
      user?.tipoUser === "empresa"
        ? user?.Empresa?.[0]?.nomeFantasia || ""
        : user?.Cliente?.[0]?.nome || "",
    email: user?.email ?? "",
    telefone:
      user?.tipoUser === "empresa"
        ? user?.Empresa?.[0]?.telefone || ""
        : user?.Cliente?.[0]?.telefone || "",
    endereco:
      user?.tipoUser === "empresa"
        ? user?.Empresa?.[0]?.Endereco?.cep || ""
        : user?.Cliente?.[0]?.Endereco?.cep || "",
    cpf:
      user?.tipoUser === "empresa"
        ? user?.Empresa?.[0]?.cnpj || ""
        : user?.Cliente?.[0]?.cpf || "",
  };
  // UseForm hook with zod resolver
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: typeof defaultValues) => {
    let local;
    try {
      local = await cep(`${data.endereco}`);
    } catch (error) {
      setError("endereco", { type: "manual", message: "CEP inválido" });
      return;
    }

    const dto: any = {
      email: data.email,
      tipoUser: user?.tipoUser == "empresa" ? "empresa" : "cliente",
      ...(user?.tipoUser === "empresa"
        ? {
            Empresa: [
              {
                cnpj: data.cpf,
                nomeFantasia: data.nome,
                telefone: data.telefone,
                Endereco: {
                  cidade: local.city,
                  bairro: local.neighborhood,
                  estado: local.state,
                  cep: local.cep,
                },
              },
            ],
          }
        : {
            Cliente: [
              {
                cpf: data.cpf,
                nome: data.nome,
                telefone: data.telefone,
                Endereco: {
                  cidade: local.city,
                  bairro: local.neighborhood,
                  estado: local.state,
                  cep: local.cep,
                },
              },
            ],
          }),
    };

    try {
      const response = await updateUser(dto);
      if (response.status === "ok") {
        navigation.goBack();
      } else {
        // setText("Falha ao atualizar os dados");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={"#1f1f1f"} barStyle="light-content" />
      <ScrollView>
        <HeaderPerfil navigation={navigation} />
        <ShowPerfil />
        <View style={styles.container}>
          <TitleTextPerfil>Detalhes da conta</TitleTextPerfil>
          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputPerfil
                title="Nome:"
                onBlur={onBlur}
                func={onChange}
                value={value}
                error={errors.nome?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputPerfil
                title="E-mail:"
                onBlur={onBlur}
                func={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="telefone"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputPerfil
                title="Telefone:"
                onBlur={onBlur}
                func={onChange}
                value={value}
                error={errors.telefone?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="endereco"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputPerfil
                title="CEP:"
                onBlur={onBlur}
                func={onChange}
                value={value}
                error={errors.endereco?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="cpf"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputPerfil
                title="CPF/CNPJ:"
                onBlur={onBlur}
                func={onChange}
                value={value}
                error={errors.cpf?.message}
              />
            )}
          />
          {/* 
          <ErrorAlert isAlert={text != null} styles={styles.errorText}>
            {text}
          </ErrorAlert> */}
          <ButtonPerfil onPress={handleSubmit(onSubmit)} />
        </View>
        <LoadingIndicator visible={loading} />
      </ScrollView>
    </View>
  );
};
export default UpdatePerfil;
