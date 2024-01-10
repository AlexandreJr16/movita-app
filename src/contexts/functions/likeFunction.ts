import * as auth from "../../service/index";
export async function likeProject(projetoId: number, token): Promise<any> {
  try {
    await auth.likeProject(projetoId, token);
  } catch (error) {
    throw new Error(error);
  } finally {
  }
}

export async function deleteLikeProject(
  projetoId: number,
  token
): Promise<any> {
  try {
    await auth.deleteLikeProject(projetoId, token);
  } catch (error) {
    throw new Error(error);
  } finally {
  }
}
