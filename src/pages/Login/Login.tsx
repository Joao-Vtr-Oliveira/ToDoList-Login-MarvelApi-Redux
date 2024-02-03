import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Input,
  Button,
  useToast,
  Flex,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { fetchToken } from "../../store/reducer/Login";
import { AppDispatch } from "../../store/store";

const LoginPage = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async () => {
    let loadingToastId;
    loadingToastId = toast({
      title: "Carregando",
      description: "Por favor, aguarde",
      status: "info",
      duration: null,
      isClosable: false,
    });
    const info = await dispatch(fetchToken({ user, password }));
    toast.close(loadingToastId);
    if (info.type === "login/fetchToken/fulfilled") {
      navigate("/home");
      toast({
        title: "Login concluído",
        description: "Redirecionando",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (loadingToastId) {
        toast.close(loadingToastId);
      }
      toast({
        title: "Falha no login",
        description: "Algo deu errado",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <Flex align="center" justifyContent="center" height="full" width="full">
      <Card w={['80%', '80%', '80%', '80%', '40%']}>
        <CardBody>
          <Flex flexDirection="column" gap="10" padding="5">
            <Input
              value={user}
              placeholder="Usuário"
              onChange={handleUserChange}
            />
            <Input
              value={password}
              placeholder="Senha"
              onChange={handlePasswordChange}
              type="password"
            />
            <Button onClick={handleLogin} isDisabled={!(!!user && !!password)}>
              Login
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default LoginPage;
