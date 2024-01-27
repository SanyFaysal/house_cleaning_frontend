export const getBaseUrl = (): string => {

    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://home-sync-solution.onrender.com/api/v1"
}