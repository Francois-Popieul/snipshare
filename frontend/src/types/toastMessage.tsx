export interface ToastMessage {
    type: "success" | "error" | "information";
    message: string;
    position: "top_left" | "top_center" | "top_right" | "middle_left" | "middle_center" | "middle_right" | "bottom_left" | "bottom_center" | "bottom_right";
    duration: number;
}