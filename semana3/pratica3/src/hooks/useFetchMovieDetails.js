import { useEffect, useState } from "react";




/**
 * 
 * @param {string} selectedId 
 * @returns {Object}
 */

export function useFetchMoviesDetails(selectedId){
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = (false);
    const [error, setError] = useState;

    useEffect(() => {
        
        if (!selectedId){
            setMovie({});
            setError("")
            return;
        }

        /**
         * 
         * @param {string} selectedId 
         */

        async function fetchMovieDetails (selectedId){

            try{
                setIsLoading(true);
                setError(null);

                const response = await
                fetch()

                if (!response.ok)
                    throw new Error("Error al cargar los detalles de la pelicula");

                const dara = await response.json
                setMovie(data);

            } catch {
                setError(error.message);
                setMovie({});
            } finally {
                setIsLoading(false);
            }
        }

        fetchMovieDetails(selectedId);

    }, [selectedId])

    return { movie, isLoading, error};
} 