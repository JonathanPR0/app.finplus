import { colors } from "@/styles/colors";
import React, { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { cn } from "../lib/utils";

export interface InputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
  disabled?: boolean;
  name?: string; // Nome do campo no React Hook Form
  control?: any; // Controle opcional para React Hook Form
}

const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, name, control, disabled, ...props }, ref) => {
    const formContext = useFormContext(); // Usar o contexto global do React Hook Form, se disponível
    const effectiveControl = control || formContext?.control; // Priorizar o `control` local, ou usar o do contexto

    // Caso o `name` e o `control` estejam presentes, integrar automaticamente o Controller
    if (name && effectiveControl) {
      return (
        <Controller
          control={effectiveControl}
          name={name}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <View className={cn("flex flex-col gap-1.5", className)}>
              {label && (
                <Text
                  className={cn(
                    `text-foreground text-base font-bold mb-1 ${disabled && "opacity-70"}`,
                    labelClasses
                  )}
                >
                  {label}
                </Text>
              )}
              <TextInput
                ref={ref}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholderTextColor={colors["foreground"]}
                className={cn(
                  `py-2.5 px-4 rounded-lg text-foreground bg-input ${disabled && "opacity-70"}`,
                  inputClasses
                )}
                editable={!disabled}
                {...props}
              />
              {/* Mensagem de erro */}
              {error && <Text className="text-destructive text-sm">{error.message}</Text>}
            </View>
          )}
        />
      );
    }

    // Caso contrário, renderizar como um campo normal
    return (
      <View className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <Text
            className={cn(
              `text-foreground text-base font-bold mb-1 ${disabled && "opacity-70"}`,
              labelClasses
            )}
          >
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          placeholderTextColor={colors["foreground"]}
          className={cn(
            `py-2.5 px-4 rounded-lg text-foreground bg-input ${disabled && "opacity-70"}`,
            inputClasses
          )}
          editable={!disabled}
          {...props}
        />
      </View>
    );
  }
);

export { Input };
