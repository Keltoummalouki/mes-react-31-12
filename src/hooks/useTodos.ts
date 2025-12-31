import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { Todo } from '../types/todo';
import { QueryClientProvider } from '@tanstack/react-query';

// Données initiales simulées
const initialTodos: Todo[] = [
  { id: '1', title: 'Apprendre React Hook Form', completed: false },
  { id: '2', title: 'Comprendre Zod', completed: true },
  { id: '3', title: 'Maîtriser React Query', completed: false },
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
  return useQuery({
    queryKey: ['todo'],
    queryFn: fetchTodos,
  });
};

// Hook pour ajouter un todo
export const useAddTodo = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      // Simulation d'ajout asynchrone
      const newTodo: Todo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      return newTodo;
    },
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(['todo'], (oldTodos) => {
        return oldTodos ? [...oldTodos, newTodo] : [newTodo];
      });
    },
  });
};

// Hook pour basculer l'état completed d'un todo
export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<Todo[]>(['todo'], (oldTodos) => {
        return oldTodos?.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
      });
    },
  });
};