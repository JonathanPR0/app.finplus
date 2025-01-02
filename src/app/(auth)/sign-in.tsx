import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "@/hooks/useAuth";
import { useAuthProvider } from "@/providers/AuthProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schemaSignIn = z.object({
  // Dados Banco
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

export type SignInSchema = z.infer<typeof schemaSignIn>;

export const useFormSignInData = (data: SignInSchema) => {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(schemaSignIn),
    defaultValues: data,
    values: data,
  });

  return {
    form,
  };
};

const initialData: SignInSchema = {
  email: "",
  password: "",
};

export default function Signin() {
  const { form } = useFormSignInData(initialData);
  const router = useRouter();
  const provider = useAuthProvider();

  const { data, mutate: login, isPending, isSuccess } = useAuth().login();

  const onSubmit = (data: SignInSchema) => {
    login(data);
  };

  useEffect(() => {
    if (isSuccess) {
      provider.login(data.user, data.token);
      router.push("/home");
    }
  }, [isSuccess, isPending]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = provider.token;

      // Se o usuário estiver logado, navega para a tela inicial
      if (token) {
        router.push("/home");
      }
    };

    checkLoginStatus();
  }, [router]);

  return (
    <SafeAreaView className="flex-1 bg-slate-200/50">
      <ScrollView>
        <View className="flex gap-4 px-4 pb-8 pt-14 rounded-3xl ">
          <Image
            source={require("@/assets/sign-in.png")}
            resizeMode="contain"
            className="w-full h-60 "
          />
        </View>

        <View className="flex-1 bg-slate-100 min-h-full">
          <Text className="text-3xl text-center font-semibold text-slate-800 mt-10 font-psemibold">
            Login
          </Text>

          <View className="flex flex-col justify-center p-6 gap-2 ">
            <Input
              name="email"
              textContentType="emailAddress"
              label="Email:"
              labelClasses="text-slate-600"
              inputClasses="bg-slate-200 text-slate-600"
              control={form.control}
              disabled={isPending}
            />
            <Input
              name="password"
              textContentType="password"
              label="Senha:"
              labelClasses="text-slate-600"
              inputClasses="bg-slate-200 text-slate-600"
              control={form.control}
              disabled={isPending}
            />
            <Button
              label="Entrar"
              labelClasses="text-green-950"
              className="mt-4"
              onPress={form.handleSubmit(onSubmit)}
              disabled={isPending}
            />
            {/* <Text className="text-center text-slate-500 font-pregular text-sm mt-4">
              Ainda não tem uma conta?{" "}
              <Link href={"/sign-up"} className="text-secondary">
                Crie uma aqui
              </Link>
            </Text> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
