import { supabase } from './supabaseClient'

export const getAllTodos = async () => {
    const todos = await supabase.from ('todo').select('*');
    return todos;
}

