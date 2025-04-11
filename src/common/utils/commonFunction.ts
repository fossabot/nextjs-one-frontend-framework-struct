import { CommonFunction as FWCommonFunction } from 'one-frontend-framework';

/**
 * Common function
 */
export class CommonFunction extends FWCommonFunction {
  /**
   * Base64 string to file
   * @param base64String 
   * @param filename 
   * @returns 
   */
  public static base64ToFile(base64String: string, filename: string): File | undefined {
    const trimmedString = base64String.replace('data:image/jpeg;base64,', '');
    const imageContent = atob(trimmedString);
    const buffer = new ArrayBuffer(imageContent.length);
    const view = new Uint8Array(buffer);

    for (let n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }
    const type = 'image/jpeg';
    const blob = new Blob([buffer], { type });
    return new File([blob], filename, { lastModified: new Date().getTime(), type });
  }

  /**
   * Get base64 from image
   * @param url 
   * @returns 
   */
  public static async getBase64FromUrl(url: string): Promise<string> {
    const response = await fetch(url);
    const fetchAsBlob = await response.blob();
    return this.convertBlobToBase64(fetchAsBlob);
  }

  /**
   * Sleep program
   * @param miliseconds 
   * @returns 
   */
  public static sleep(miliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
  }

  /**
   * Blob to base64
   * @param blob 
   * @returns 
   */
  private static convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader;
      reader.onerror = reject;
      reader.onload = () => {
        const base64 = reader.result as string;
        resolve(base64);
      };
      reader.readAsDataURL(blob);
    });
  }
}