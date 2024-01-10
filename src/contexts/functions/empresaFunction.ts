import * as auth from "../../service/index";

export async function getTopEmpresas(num: number, setLoading): Promise<any> {
  try {
    setLoading(true);
    const empresas = await auth.getRandomEmpresas(num);
    return empresas;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}
