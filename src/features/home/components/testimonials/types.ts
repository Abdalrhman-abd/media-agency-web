import type { MediaRef } from "../../../../shared/types/media";

export interface TestimonialProject {
id: string;
slug: string;
title: string;
}

export interface Testimonial {
id: string;
clientName: string;
clientTitle: string;
content: string;
rating: number;
avatar: MediaRef | null;
project: TestimonialProject | null;
}

export interface TestimonialsResponse {
success: boolean;
data: Testimonial[];
}