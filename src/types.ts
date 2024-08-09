export interface TimelineItem {
    year: string;
    title: string;
    description: string;
}
export interface NavButton {
    name: string;
    path: string;
    active: boolean;
    hash?: {
        type: boolean;
        default: false;
    };
}
