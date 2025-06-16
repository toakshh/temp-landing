const fallbackCopyToClipboard = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;

  // Prevent scrolling on iOS
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Oops, unable to copy", err);
  }

  document.body.removeChild(textarea);
};
export const copyToClipboard = async (text: string) => {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
    } else {
        fallbackCopyToClipboard(text);
    }
}