import { useEffect, useState } from "react";
const API_KEY = 

/**
 * 
 * @param {string} query 
 * @returns {Object}
 */

export function useFetchMovies(query){

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError ]= useState("");

    useEffect(()=>{
        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }

    async function fetchMovies(){
        try {
            setIsLoading(true)
            setError(null);

            const response = await 
            fetch();

            if (!response.ok)
                throw new Error("Error al cargar películas");

            const data = await response.json();

            if (data.response === "false")
                throw new Error ("NO se encontraron resultados");

            setMovies(data.Search);
        } catch (err) {
            setError(err.message);
            setMovies([]);
        } finally {
            setIsLoading(false);
        }
    }

    fetchMovies();
    }, [query])

    return {movies, isLoading, error};
}