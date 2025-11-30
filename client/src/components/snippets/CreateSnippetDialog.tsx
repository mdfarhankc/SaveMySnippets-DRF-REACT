import LanguageSelector from "@/components/languages/LanguageSelector";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useCreateSnippets } from "@/hooks/snippets/useCreateSnippets";
import {
  createEditSnippetSchema,
  type CreateEditSnippetValues,
} from "@/validations/snippet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import LoadingButton from "../common/LoadingButton";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

export default function CreateSnippetDialog() {
  const [open, setOpen] = useState(false);
  const form = useForm<CreateEditSnippetValues>({
    resolver: zodResolver(createEditSnippetSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      language: "",
      is_public: false,
      tags: [],
    },
  });

  const { mutate: createSnippet, isPending } = useCreateSnippets({
    onSuccess: () => {
      setOpen(false);
      form.reset();
    },
  });

  const onSubmit = async (values: CreateEditSnippetValues) => {
    createSnippet(values);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Snippet</Button>
      </DialogTrigger>
      <DialogContent className="w-[800px] sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Create a new snippet</DialogTitle>
          <DialogDescription>
            Copy the code snippet and paste here.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className=" h-[70vh]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Django Custom User Model..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your snippet title.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="About this snippet ... (Optional)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-5">
                <FormField
                  name="language"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Language</FormLabel>
                      <FormControl>
                        <LanguageSelector
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="is_public"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Public</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name="tags"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter comma-separated tags (e.g., auth,react,api)"
                        value={field.value?.join(", ") ?? ""}
                        onChange={(e) => {
                          const raw = e.target.value;
                          const tagsArray = raw
                            .split(",")
                            .map((tag) => tag.trim())
                            .filter((tag) => tag.length > 0);
                          field.onChange(tagsArray);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Add relevant tags to categorize your snippet.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="content"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <LoadingButton
                  type="submit"
                  className="w-full"
                  isLoading={isPending}
                >
                  Create
                </LoadingButton>
              </DialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
