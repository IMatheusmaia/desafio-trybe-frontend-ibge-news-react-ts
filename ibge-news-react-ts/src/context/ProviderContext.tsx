import { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import { NewsType } from '../types';
import request from '../services/request';

type ProviderContextProps = {
  children: React.ReactNode,
};

function ProviderContext({ children }: ProviderContextProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    setLoading(true);
    const getData = async (): Promise<void> => {
      const data = await request();
      setNews(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getData();
  }, []);

  return (
    <GlobalContext.Provider
      value={
      {
        loading,
        news,
      }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ProviderContext;
