import api from "../services/api";

export async function people(page: number): Promise<void> {
  const defaultPage = page ? page : 1;
  await api.get('/people/?page={defaultPage}');
};