import * as auth from "../../service/index";

export async function getFavProjects(token, setLoading): Promise<any> {
  try {
    setLoading(true);
    const projeto = await auth.getFavProject(token);
    return projeto;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}

export async function getProject(num: number, setLoading): Promise<any> {
  try {
    setLoading(true);
    const projeto = await auth.getProject(num);
    return projeto;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}
export async function getTopProjects(num: number, setLoading): Promise<any> {
  try {
    setLoading(true);
    const prods = await auth.getTopProjects(num);
    return prods;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}
export async function getAllProjetosByCliente(
  num: number,
  setLoading
): Promise<any> {
  try {
    setLoading(true);
    const prods = await auth.getAllProjetosByCliente(1);
    return prods;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}
export async function getRandomProjects(num: number, setLoading): Promise<any> {
  try {
    setLoading(true);
    const prods = await auth.getRandomProjects(num);
    return prods;
  } catch (error) {
    setLoading(false);
    throw new Error(error);
  } finally {
    setLoading(false);
  }
}

export async function addImageProj(
  dto: { bin: any; id: number },
  token: string
): Promise<any> {
  try {
    const prods = await auth.addImageProj(token, dto);
    return prods;
  } catch (error) {
    throw new Error(error);
  } finally {
  }
}
