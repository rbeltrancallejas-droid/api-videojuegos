import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url || typeof url !== 'string') {
            setError('URL no válida proporcionada al hook.');
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    signal: controller.signal,
                    headers: { 'Accept': 'application/json' }
                });

                if (Array.isArray(response.data)) {
                    setData(response.data);
                } else if (response.data && typeof response.data === 'object') {
                    setData(response.data);
                } else {
                    throw new Error('Estructura de respuesta JSON incompatible.');
                }
            } catch (err) {
                if (axios.isCancel(err)) {
                    // Petición cancelada deliberadamente al desmontar componente
                    return;
                }
                setError(err.response?.data?.message || err.message || 'Error al conectar con la API.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, loading, error };
};