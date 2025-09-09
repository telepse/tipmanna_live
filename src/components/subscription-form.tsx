"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const subscriptionFormSchema = z.object({
  email: z.email(),
});

export const SubscriptionForm = () => {
  // 1. Define subscription form.
  const form = useForm<z.infer<typeof subscriptionFormSchema>>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define submit handler.
  const onSubmit = async (values: z.infer<typeof subscriptionFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your email here"
                  autoComplete="off"
                  className="flex-1 rounded-l rounded-r-none bg-[#232A31]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="tipmanna"
          size="lg"
          className="rounded-l-none rounded-r-md"
        >
          Notify me
        </Button>
      </form>
    </Form>
  );
};
