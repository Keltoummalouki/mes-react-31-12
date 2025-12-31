import type { Todo } from "../types/todo";

// Données initiales simulées
const initialTodos: Todo[] = [
  { id: "1", title: "Apprendre React Hook Form", completed: false },
  { id: "2", title: "Comprendre Zod", completed: true },
  { id: "3", title: "Maîtriser React Query", completed: false },
];

// Simulation d'un fetch asynchrone
const fetchTodos = (): Promise<Todo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialTodos);
    }, 500);
  });
};

// Hook pour récupérer les todos
export const useTodos = () => {
  console.log(fetchTodos)
  return fetchTodos;
};

// Hook pour ajouter un todo
export const useAddTodo = (initialTodos : Todo[] ,newTodo ) => {
  return initialTodos.push(newTodo);
};

// Hook pour basculer l'état completed d'un todo
export const useToggleTodo = () => {
  
};
