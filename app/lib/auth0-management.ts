import { ManagementClient } from 'auth0';

// Initialize the Auth0 Management API client
export function getAuth0ManagementClient() {
  const domain = process.env.AUTH0_DOMAIN!;
  const clientId = process.env.AUTH0_MANAGEMENT_CLIENT_ID!;
  const clientSecret = process.env.AUTH0_MANAGEMENT_CLIENT_SECRET!;

  if (!domain || !clientId || !clientSecret) {
    throw new Error('Missing Auth0 Management API credentials');
  }

  return new ManagementClient({
    domain,
    clientId,
    clientSecret
  });
}

// Get user information
export async function getUser(userId: string) {
  const management = getAuth0ManagementClient();
  try {
    const user = await management.users.get({ id: userId });
    return user;
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
}

// Update user information
export async function updateUser(userId: string, userData: any) {
  const management = getAuth0ManagementClient();
  try {
    const user = await management.users.update({ id: userId }, userData);
    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

// Get all users (with pagination)
export async function getUsers(page = 0, perPage = 100) {
  const management = getAuth0ManagementClient();
  try {
    const users = await management.users.getAll({
      page,
      per_page: perPage,
      include_totals: true
    });
    return users;
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
}

// Create a new user
export async function createUser(userData: any) {
  const management = getAuth0ManagementClient();
  try {
    const user = await management.users.create(userData);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// Delete a user
export async function deleteUser(userId: string) {
  const management = getAuth0ManagementClient();
  try {
    await management.users.delete({ id: userId });
    return { success: true };
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

// Get user logs
export async function getUserLogs(userId: string, page = 0, perPage = 100) {
  const management = getAuth0ManagementClient();
  try {
    const logs = await management.logs.getAll({
      q: `user_id:"${userId}"`,
      page,
      per_page: perPage,
      sort: 'date:-1'
    });
    return logs;
  } catch (error) {
    console.error('Error getting user logs:', error);
    throw error;
  }
} 