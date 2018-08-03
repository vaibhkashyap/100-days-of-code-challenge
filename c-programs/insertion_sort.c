#include<stdio.h>
void insertion_sort(int a[],int n);
void main()
{
int a[100],i,n;

printf("enter the size of array");
scanf("%d",&n);
printf("enter the array");
for(i=0;i<n;i++)
scanf("%d",&a[i]);
insertion_sort(a,n);
}
   void insertion_sort(int a[],int n)
   {
      int i,temp,j;
      for (i=1;i<n;i++)
    {
       temp=a[i];
       j=i-1;

        while(j>=0 && a[j]>temp)
        {
           a[j+1]=a[j];
           j=j-1;
        }
        a[j+1]=temp;
      }
        printf("the sorted array is :\n");
        for(i=0;i<n;i++)
         printf("%d\n",a[i]);
     }
