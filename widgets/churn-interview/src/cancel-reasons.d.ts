export interface CancelReason {
  /** Machine value sent in the result. Defaults use Stripe's cancellation_details.feedback values. */
  value: string;
  /** Text shown to the customer. */
  label: string;
}

export interface CancelReasonsText {
  title?: string;
  description?: string;
  reasonsLegend?: string;
  commentLabel?: string;
  commentPlaceholder?: string;
  submitLabel?: string;
  skipLabel?: string;
  closeLabel?: string;
  interviewLabel?: string;
}

export interface CancelReasonsTheme {
  accent?: string;
  accentText?: string;
  background?: string;
  text?: string;
  muted?: string;
  border?: string;
  radius?: string;
  fontFamily?: string;
}

export interface CancelReasonsResult {
  /** Selected reason value, or null if none was picked or the customer skipped. */
  reason: string | null;
  reasonLabel: string | null;
  /** Free-text answer, trimmed. Empty string when skipped. */
  comment: string;
  /** True when the customer skipped or gave no answer. */
  skipped: boolean;
  /** ISO 8601 time in the browser. */
  timestamp: string;
  /** origin + pathname of the page (no query string). */
  page: string | null;
  metadata: Record<string, unknown> | null;
  /** Present only if the widget failed to render and failed open. */
  error?: string;
}

export interface CancelReasonsOptions {
  reasons?: CancelReason[];
  text?: CancelReasonsText;
  /** Default 1000. */
  maxCommentLength?: number;
  /** Max time to wait for onSubmit and the webhook before the cancel continues. Default 1500 ms. */
  callbackTimeoutMs?: number;
  /** Optional URL that receives the result as a JSON POST. Never put secrets here. */
  webhookUrl?: string | null;
  webhookHeaders?: Record<string, string> | null;
  /** Your own data echoed in the result, for example { subscriptionId }. */
  metadata?: Record<string, unknown> | null;
  /** Off by default. Shows "Want to tell us more in a 5-minute voice chat?" linking to your URL. */
  interviewLink?: string | { url: string; label?: string } | null;
  theme?: CancelReasonsTheme | null;
  onSubmit?: ((result: CancelReasonsResult) => void | Promise<unknown>) | null;
  onDismiss?: (() => void) | null;
  /** Replace the default "replay the original click" behaviour. */
  onContinue?: ((result: CancelReasonsResult, trigger: HTMLElement) => void) | null;
  /** Where to mount the dialog. Default document.body. */
  container?: HTMLElement | null;
}

export interface CancelReasonsHandle {
  detach(): void;
}

export declare const DEFAULT_REASONS: CancelReason[];
export declare const version: string;
export declare function attach(target: string | Element | ArrayLike<Element>, options?: CancelReasonsOptions): CancelReasonsHandle;
export declare function open(options?: CancelReasonsOptions): Promise<CancelReasonsResult | null>;
export declare function report(result: CancelReasonsResult, options?: CancelReasonsOptions, trigger?: EventTarget): Promise<void>;
export declare function autoInit(root?: ParentNode): CancelReasonsHandle[];
export declare function sendWebhook(url: string, payload: unknown, headers?: Record<string, string> | null): Promise<boolean>;

declare const CancelReasons: {
  attach: typeof attach;
  open: typeof open;
  report: typeof report;
  autoInit: typeof autoInit;
  sendWebhook: typeof sendWebhook;
  DEFAULT_REASONS: typeof DEFAULT_REASONS;
  version: string;
};
export default CancelReasons;

declare global {
  interface Window {
    CancelReasons: typeof CancelReasons;
  }
  interface HTMLElementEventMap {
    'cancelreasons:submit': CustomEvent<CancelReasonsResult>;
    'cancelreasons:dismiss': CustomEvent<undefined>;
  }
}
