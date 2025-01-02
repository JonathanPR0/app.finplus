import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schemaSignUp = z.object({
  // Dados Banco
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  password1: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  user: z.string().min(6, { message: "O nome deve ter no mínimo 6 caracteres" }),
});

export type SignUpSchema = z.infer<typeof schemaSignUp>;

export const useFormSignUpData = (data: SignUpSchema) => {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(schemaSignUp),
    defaultValues: data,
    values: data,
  });

  return {
    form,
  };
};

const initialData: SignUpSchema = {
  email: "",
  password: "",
  password1: "",
  user: "",
};

export default function SignUp() {
  const { form } = useFormSignUpData(initialData);

  const onSubmit = (data: SignUpSchema) => {
    console.log("DATA", data);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-200/50">
      <ScrollView>
        <View className="flex gap-4 px-4 pb-8 pt-14 rounded-3xl ">
          <Image
            source={require("@/assets/sign-up.png")}
            resizeMode="contain"
            className="w-full h-60 "
          />
        </View>

        <View className="flex-1 bg-slate-100 min-h-full">
          <Text className="text-3xl text-center font-semibold text-slate-800 mt-10 font-psemibold">
            Cadastre-se!
          </Text>

          <View className="flex flex-col justify-center p-6 gap-2 ">
            <Input
              name="email"
              textContentType="emailAddress"
              label="Email:"
              labelClasses="text-slate-600"
              inputClasses="bg-slate-200 text-slate-600"
              control={form.control}
              disabled
            />
            <Input
              name="user"
              textContentType="name"
              label="Nome:"
              labelClasses="text-slate-600"
              inputClasses="bg-slate-200 text-slate-600"
              control={form.control}
              disabled
            />
            <Input
              name="password"
              textContentType="password"
              label="Senha:"
              labelClasses="text-slate-600"
              inputClasses="bg-slate-200 text-slate-600"
              control={form.control}
              disabled
            />
            <Input
              name="password1"
              textContentType="password"
              label="Confirme a Senha:"
              labelClasses="text-slate-600"
              inputClasses="bg-slate-200 text-slate-600"
              control={form.control}
              disabled
            />
            <Button
              label="Entrar"
              labelClasses="text-green-950"
              className="mt-4"
              disabled
              onPress={form.handleSubmit(onSubmit)}
            />
            <View className="flex flex-row gap-1 text-sm mx-auto mt-4">
              <Text className="text-slate-500 font-pregular text-sm">Já tem uma conta?</Text>
              <Link href={"/sign-in"} className="text-secondary text-sm">
                Clique aqui
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
