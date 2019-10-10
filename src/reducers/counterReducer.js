export const counterReducer = (state = 0, action) =>
{
    switch (action.type)
    {
        case "MINUS":
            return state - 1;
        case "RESET":
            return 0;
        case "ADD":
            return state + 1;
        default:
            return state;
    }
}