export const getBaseUrl = (): string => {

    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://house-cleaning-backend-rcxdiixez-sanyfaysal.vercel.app/api/v1"
}