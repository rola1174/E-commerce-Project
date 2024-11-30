// LocalStorageManager.js

const USERS_KEY = 'users'; // Key to store the list of users in localStorage

// Sync a user with Local Storage
export const addUserToLocalStorage = (user) => {
  try {
    // Retrieve existing users from localStorage (if any)
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

    // Check if the user already exists based on a unique identifier (e.g., userId)
    const existingUserIndex = users.findIndex((u) => u.userId === user.userId);

    if (existingUserIndex > -1) {
      // Update the existing user
      users[existingUserIndex] = user;
    } else {
      // Add the new user to the list
      users.push(user);
    }

    // Save the updated list of users back to localStorage
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.error("Error adding user to local storage:", error);
  }
};

// Fetch all users from Local Storage
export const fetchAllUsersFromLocalStorage = () => {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    return users;
  } catch (error) {
    console.error("Error fetching users from local storage:", error);
    return [];
  }
};

// Fetch a specific user by userId
export const fetchUserFromLocalStorage = (userId) => {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    return users.find((user) => user.userId === userId) || null;
  } catch (error) {
    console.error("Error fetching user from local storage:", error);
    return null;
  }
};

// Remove a specific user by userId
export const removeUserFromLocalStorage = (userId) => {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const updatedUsers = users.filter((user) => user.userId !== userId);

    // Save the updated list back to localStorage
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
  } catch (error) {
    console.error("Error removing user from local storage:", error);
  }
};

// Clear all users from Local Storage
export const clearAllUsersFromLocalStorage = () => {
  try {
    localStorage.removeItem(USERS_KEY);
  } catch (error) {
    console.error("Error clearing users from local storage:", error);
  }
};
