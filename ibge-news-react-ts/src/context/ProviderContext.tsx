import { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import { NewsType } from '../types';
import request from '../services/request';

type ProviderContextProps = {
  children: React.ReactNode,
};

function ProviderContext({ children }: ProviderContextProps) {
  const themeMemory = JSON.parse(localStorage.getItem('isDark')
  || 'false') === true ? 'dark' : 'light';

  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(themeMemory);
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
    if (theme === 'dark') {
      localStorage.setItem('isDark', 'true');
    } else {
      localStorage.removeItem('isDark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <GlobalContext.Provider
      value={
      {
        loading,
        theme,
        toggleTheme,
        news,
      }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ProviderContext;
