import LanguageSelector from "../languages/LanguageSelector";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { useForm, type ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "../common/LoadingButton";
import {
  createEditSnippetSchema,
  type CreateEditSnippetValues,
} from "@/validations/snippet";
import { useCreateSnippets } from "@/hooks/snippets/useCreateSnippets";
import { useUpdateSnippet } from "@/hooks/snippets/useUpdateSnippet";
import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";
import type { Snippet } from "@/types";

interface SnippetFormProps {
  mode: "create" | "edit";
  snippet?: Snippet;
}

export default function SnippetForm({ mode, snippet }: SnippetFormProps) {
  const [tagsInput, setTagsInput] = useState("");
  console.log("Snippet: ", snippet);

  const form = useForm<CreateEditSnippetValues>({
    resolver: zodResolver(createEditSnippetSchema),
    defaultValues: {
      title: snippet?.title || "",
      description: snippet?.description || "",
      content: snippet?.content || "",
      language: snippet?.language.id || "",
      is_public: snippet?.is_public || false,
      tags: snippet?.tags || [],
    },
  });

  useEffect(() => {
    if (snippet) {
      setTagsInput(snippet.tags.join(", "));
    }
  }, [snippet]);

  const createMutation = useCreateSnippets();
  const updateMutation = useUpdateSnippet(snippet?.slug);

  const onSubmit = (values: CreateEditSnippetValues) => {
    if (mode === "create") {
      createMutation.mutate(values);
    } else {
      updateMutation.mutate(values);
    }
  };

  const removeTag = (tagToRemove: string, field: ControllerRenderProps) => {
    const updatedTags =
      field.value?.filter((tag: string) => tag !== tagToRemove) || [];
    field.onChange(updatedTags);
    setTagsInput(updatedTags.join(", "));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Snippet Title" />
              </FormControl>
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
                <Input {...field} placeholder="Optional description..." />
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
                <div className="space-y-2">
                  <Input
                    placeholder="Enter comma-separated tags (e.g., auth,react,api)"
                    value={tagsInput}
                    onChange={(e) => {
                      const raw = e.target.value;
                      setTagsInput(raw);
                      const tagsArray = raw
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter((tag) => tag.length > 0);
                      field.onChange(tagsArray);
                    }}
                  />
                  {field.value && field.value.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {field.value.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag, field)}
                            className="ml-1 hover:bg-muted rounded-full"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </FormControl>
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
                <Textarea {...field} rows={10} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          type="submit"
          className="w-full"
          isLoading={createMutation.isPending || updateMutation.isPending}
        >
          {mode === "create" ? "Create Snippet" : "Update Snippet"}
        </LoadingButton>
      </form>
    </Form>
  );
}
