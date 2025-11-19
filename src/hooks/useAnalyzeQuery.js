import { useMutation } from "@tanstack/react-query";

import { analyzeRealEstate } from "../api/realEstateApi";

export function useAnalyzeQuery() {
    return useMutation({
        mutationFn: analyzeRealEstate,
    });
}