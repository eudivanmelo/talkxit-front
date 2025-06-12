const API_URL = "http://127.0.0.1:8001/api/v1"; // ajuste para o endereço do seu backend

export async function login(username: string, password: string) {
  const res = await fetch(`${API_URL}/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error("Usuário ou senha inválidos");

  return res.json(); // { access, refresh }
}

export async function refreshToken(refresh: string) {
  const res = await fetch(`${API_URL}/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });
  if (!res.ok) throw new Error("Refresh token inválido");
  return res.json(); // { access }
}