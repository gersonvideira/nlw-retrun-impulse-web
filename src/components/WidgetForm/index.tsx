import { useState } from "react"


import bugImageurl from '../../assets/bug.svg'
import ideaImageurl from '../../assets/idea.svg'
import thoughtImageurl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep"

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageurl,
            alt: 'Imagem de um insecto'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageurl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageurl,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    }
}
export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSend, setFeedbackSend] = useState(false)

    const handleRestartFeedback = () => {
        setFeedbackSend(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl  mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSend ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSend={() => setFeedbackSend(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-sx text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://github.com/Gersonvideira">Taskao</a>
            </footer>
        </div>
    )
}