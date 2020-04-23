export default function users(state: {
    items: never[];
    error: string;
} | undefined, action: any): {
    items: any;
    error: string;
};
