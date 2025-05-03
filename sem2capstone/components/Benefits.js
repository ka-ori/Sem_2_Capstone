import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import Image from "next/image"

export function Benefits() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
       
        <ResizablePanelGroup direction="horizontal" className="min-h-[600px] w-full rounded-lg border !mt-30">
          <ResizablePanel defaultSize={40} minSize={30}>
            <div className="flex h-full flex-col justify-center !p-6">
              <h2 className="text-3xl font-bold tracking-tight">Secure, Hassle-free Donations</h2>
              <p className="mt-4 text-muted-foreground">
                Make confident donations to verified charities through our secure platform. Track your giving and
                receive instant tax receipts.
              </p>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60}>
            <div className="relative flex h-full w-full items-center justify-center">

              <Image
                src="/images/Cause2.jpg"
                alt="Person using a mobile device for donations"
                fill
                className="object-cover rounded-r-lg"
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div>
        
        <ResizablePanelGroup direction="horizontal" className="min-h-[600px] w-full rounded-lg border !mt-30">
          <ResizablePanel defaultSize={60}>
          <div className="relative flex h-full w-full items-center justify-center">

              <Image
                src="/images/Cause2.jpg"
                alt="Person using a mobile device for donations"
                fill
                className="object-cover rounded-l-lg"
              />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40} minSize={30}>
            <div className="flex h-full flex-col justify-center !p-6">
              <h2 className="text-3xl font-bold tracking-tight ">Secure, Hassle-free Donations</h2>
              <p className="mt-4 text-muted-foreground">
                Make confident donations to verified charities through our secure platform. Track your giving and
                receive instant tax receipts.
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
