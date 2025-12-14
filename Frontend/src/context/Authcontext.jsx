import { createContext,useContext,useEffect,useMemo,useState } from "react";
import api from '../API/api.js'
const AuthContext = createContext();

export const useAuth = ()=>{
   const context = useContext(AuthContext);
   if(!context) throw new Error("useAuth must be used within an AuthProvider");
   return context;
};


export const AuthProvider = ({children})=>{
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true);
   const [isAuthenticated,setIsAuthenticated] = useState(false);


    useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async()=>{
    try {
        const response  = await api.get('/auth/current-user')
        setUser(response.data.user);
        setIsAuthenticated(true);
    } catch (error) {
        console.error("Auth check failed:", error);
        setUser(null);
        setIsAuthenticated(false);
    }
  }

  const register = async(userData)=>{
    try {
        const response = await api.post('/auth/register',{
                username: userData.username,
                email:userData.email,
                password:userData.password,
                user_type:userData.user_type
        })
        if(response.data.success)
        {
            return { success:true, message:response.data.message }
        }
    } catch (error) {
        console.error("Registration failed:", error);
        return { success:false, message:error.response?.data?.message || "Registration failed"
    }
};
  }

  const login = async(email,password)=>{
    try {
        const response = await api.post('/auth/login',{
            email,
            password
        })
        if(response.data.success){
            setUser(response.data.user);
            setIsAuthenticated(true);
            return { success:true, message:response.data.message }
        }        
    } catch (error) {
        console.error("Login failed:", error);
        return { success:false, message:error.response?.data?.message || "Login failed"};
    }
  }

  const logout = async()=>{
    try {
        const response = await api.post('/auth/logout');

    } catch (error) {
        console.log("Logout failed:", error);
    }finally{
        setUser(null);
        setIsAuthenticated(false);
    }
  }
  const value = useMemo(() => ({
    user,
    isAuthenticated,
    loading,
    register,
    login,
    logout
  }), [user, isAuthenticated, loading,]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}