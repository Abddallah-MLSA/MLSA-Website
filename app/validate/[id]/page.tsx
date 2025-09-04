import connectToDatabase from "@/config/db";
import Certificate from "@/models/certificateModel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try{
  await connectToDatabase();
  const certificate = await Certificate.findById(id);
  

  const roleType = certificate.teamMember ? `Team Member - Role: ${certificate.tag}` : `Course - ${certificate.tag}`;

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[450px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-green-600 text-center">✅ Virified Certificate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><span className="font-semibold">Name:</span> {certificate.name}</p>
          <p><span className="font-semibold">Type:</span> {roleType}</p>
          <p><span className="font-semibold">Certificate ID:</span> {certificate._id.toString()}</p>
          <p><span className="font-semibold">Issued At:</span> {new Date(certificate.createdAt).toLocaleDateString("en-GB")}</p>
        </CardContent>
      </Card>
    </div>
  );
  }catch(e){
      return (
        <div className="flex items-center justify-center h-screen">
          <Card className="w-[400px] border-red-500 border-2">
            <CardHeader>
              <CardTitle className="text-red-600 text-center">Error</CardTitle>
            </CardHeader>
            <CardContent className="text-center">❌ Certificate not found</CardContent>
          </Card>
        </div>
      );
  }

}
