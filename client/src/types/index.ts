export interface User {
    id: string;
    email: string;
    full_name: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
}

export interface Lanugage {
    id: string;
    name: string;
    extension: string
}

export interface Snippet {
    id: string;
    title: string;
    description: string;
    content: string;
    is_public: boolean;
    language: Lanugage;
    tags: Array<string>;
    created_at: string;
    updated_at: string;
}