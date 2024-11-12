const API_URL = 'https://api.test.cyberia.studio/api/v1';

export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/projects`, {
    headers: { 'Accept-Language': 'ru' },
  });
  const data = await response.json();
  return data;
};

export const fetchProjectCategories = async () => {
  const response = await fetch(`${API_URL}/project-categories`);
  const data = await response.json();
  return data;
};

export const submitFeedback = async (phone, email, message) => {
  const response = await fetch(`${API_URL}/feedbacks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, email, message }),
  });
  const data = await response.json();
  return data;
};