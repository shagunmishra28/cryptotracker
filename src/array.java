import java.util.io;

class a{


public static int arrayLength(int[] arr) {
    Scanner sc=new Scanner(System.in);
    int t=sc.nextLine();
    int ar[]=new int[t];
    for(int i=0;i<ar.length();i++)
    {
        ar[i]=sc.nextLine();
    }
    System.out.println(ar.length());

    
    }
}