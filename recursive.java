public class recursive {
    public static int binarySearch(int arr[], int l, int r, int x) {
        if (l <= r && l <= arr.length - 1) {

            int mid = l + (r - l) / 2;
            if (arr[mid] == x)
                return mid;
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 1, x);
            return binarySearch(arr, mid + 1, r, x);
        }
        return -1;
    }

    public static void main(String[] args) {
        int arr[] = { 2, 3, 4, 10, 40 };
        int res = binarySearch(arr, 0, arr.length, 4);
        System.out.println(res);
    }
}