"use client";

import { useState } from "react";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "../ai-elements/prompt-input";
import { Conversation, ConversationContent } from "../ai-elements/conversation";
import { Message, MessageContent } from "../ai-elements/message";
import { cn } from "@/lib/utils";
import { useSidebar } from "../ui/sidebar";

export function Chat() {
  const [text, setText] = useState<string>("");
  const { isMobile, open } = useSidebar()

  return (
    <div className="max-w-full overflow-hidden mx-auto p-6 relative size-full h-full">
      <div className="flex flex-col items-center">
        <Conversation className="w-full conversation pb-[10rem] self-start">
          <ConversationContent>
            <Message from="user">
              <MessageContent>Hi!</MessageContent>
            </Message>
          </ConversationContent>
        </Conversation>
        <PromptInput
          onSubmit={() => {}}
          className={cn("mt-4 fixed bottom-6 max-w-85 min-lg:max-w-[60rem] min-2xl:max-w-[70rem]", !isMobile && !open ? "min-lg:max-w-[70rem] min-2xl:max-w-[80rem]" : "" )}
          globalDrop
          multiple
        >
          <PromptInputBody>
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
            <PromptInputTextarea
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </PromptInputBody>
          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
            </PromptInputTools>
            <PromptInputSubmit disabled={false} status={"ready"} />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
}
