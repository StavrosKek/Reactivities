import { Profile } from "./profile";

export interface IActivity {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    category: string;
    city: string;
    venue: string;
    hostUsername: string;
    isCancelled: boolean;
    isGoing: boolean;
    isHost: boolean;
    host?: Profile;
    attendees: Profile[]
  }

  export class Activity implements IActivity {
    constructor(init: ActivityFormValues) {
      this.id = init.id!
      this.title = init.title
      this.date = init.date
      this.venue = init.venue
      this.description = init.description
      this.city = init.city
      this.category = init.category
    }
      id: string;
      title: string;
      date: Date | null;
      description: string;
      category: string;
      city: string;
      venue: string;
      hostUsername: string='';
      isCancelled: boolean=false;
      isGoing: boolean=false;
      isHost: boolean=false;
      host?: Profile;
      attendees: Profile[] = [];
  }

  export class ActivityFormValues {
    id?: string = undefined;
    title: string = '';
    category: string = '';
    description: string = '';
    city: string = '';
    venue: string = '';
    date: Date | null = null;

    constructor(activity?: ActivityFormValues) {
      if (activity) {
        this.id = activity.id;
        this.title = activity.title;
        this.category = activity.category;
        this.date = activity.date;
        this.description = activity.description;
        this.venue = activity.venue;
        this.city = activity.city;
      }
    }
  }
  