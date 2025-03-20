import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {SendHorizontal} from 'lucide-react'


const Contact = () => {

    async function submitForm(formData: FormData) {
        'use server';
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
    }
  return (
    <section id='section'>
        <h2>Contact</h2>
        <form action={submitForm}  className="flex flex-col gap-4 mt-8">
          <Input type="email" placeholder="Email" name="email"/>
          <Input type="text"  placeholder="Subject" name="subject" />
          <Textarea placeholder="Message" name="message"/>
          <Button><SendHorizontal/></Button>
        </form>
    </section>
  )
}

export default Contact