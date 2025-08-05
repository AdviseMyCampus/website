import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
    BellAlertIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    HeartIcon,
    SparklesIcon
} from "@heroicons/react/24/solid";

export enum IconNames {
    quote,
    lock,
    linkedIn,
    cloudUpArrow,
    LockClosedIcon,
    server,
    bellAlert,
    chat,
    shield,
    users,
    heart,
    sparkles
}

export const Icon = ({ name, size = 24, color = 'currentColor', ...props }: IconProps) => {
    if (name === IconNames.quote) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color={color} width={size} height={size} {...props}>
                <path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136z" />
            </svg>
        )
    }

    if (name === IconNames.cloudUpArrow) {
        return <CloudArrowUpIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.lock) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" color={color} width={size} height={size} {...props}>
                <path d="M288 0c-79.5 0-144 64.5-144 144v48H96c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-48v-48C432 64.5 367.5 0 288 0zm80 192H208v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48zM176 256h224v128H176V256zm112 64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-8.8-7.2-16-16-16z" />
            </svg>
        );
    }

    if (name === IconNames.LockClosedIcon) {
        return <LockClosedIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.server) {
        return <ServerIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.bellAlert) {
        return <BellAlertIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.chat) {
        return <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.shield) {
        return <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.users) {
        return <UserGroupIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.heart) {
        return <HeartIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.sparkles) {
        return <SparklesIcon className="h-6 w-6" aria-hidden="true" />;
    }

    if (name === IconNames.linkedIn) {
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color={color} width={size} height={size} {...props}>
            <path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" />
        </svg>
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <use href={`#icon-${name}`} fill={color} />
        </svg>
    );
};

export interface IconProps {
    name: IconNames;
    size?: number;
    color?: string;
    [key: string]: any; // Allow additional props
}