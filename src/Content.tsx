import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CodeIcon, LinkIcon } from 'lucide-react';

export default function Content() {
  return (
    <main className='text-lg'>
      <div className='container h-[calc(100vh-6rem)] flex justify-center flex-col max-w-screen-md'>
        <div className='space-y-6 text-center'>
          <h2 className='text-4xl font-extrabold'>Hi, I am Jomariel Gaitera</h2>
          <p>
            I love building web applications with strong backend systems. I
            focus on creating efficient, effective, and reliable websites. Let's
            build something great together!
          </p>
        </div>
      </div>
      <hr />
      <div className='container py-6 space-y-6 min-h-[calc(100vh-6rem)]'>
        <h1 className='font-extrabold text-4xl mb-6'>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facilis
          architecto inventore, rem qui nostrum laborum eum error? Dolorum
          corporis necessitatibus delectus repellat laudantium, ullam suscipit
          aliquid, hic quam laborum exercitationem? Harum, quia dolorum
          asperiores sequi ipsa modi saepe aut veritatis eveniet animi repellat
          placeat sunt, culpa voluptates consequuntur odio qui eius labore
          voluptate facere veniam tempora at. Ipsam dicta nobis ullam asperiores
          amet, dignissimos beatae culpa et iusto incidunt ad. Earum, quo fuga
          doloremque aliquam inventore id nam nemo.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          laboriosam voluptate saepe id illo, recusandae porro debitis iste
          facere tenetur itaque beatae perferendis, nostrum modi sequi ullam hic
          ex, est sed eos deserunt. Fugit iste esse quis illum excepturi
          incidunt accusantium facilis, illo dicta asperiores atque alias
          laboriosam qui necessitatibus laudantium tenetur deleniti repellendus?
          Iusto similique culpa provident? Omnis, excepturi vero porro dolor
          ducimus, quos fugiat dolorum iusto, quis ab ratione a similique
          voluptates exercitationem. Dignissimos quae totam reiciendis nostrum!
        </p>
      </div>
      <hr />
      <div className='container py-6 space-y-6 min-h-[calc(100vh-6rem)]'>
        <h1 className='font-extrabold text-4xl mb-6'>Technologies</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facilis
          architecto inventore, rem qui nostrum laborum eum error? Dolorum
          corporis necessitatibus delectus repellat laudantium, ullam suscipit
          aliquid, hic quam laborum exercitationem? Harum, quia dolorum
          asperiores sequi ipsa modi saepe aut veritatis eveniet animi repellat
          placeat sunt, culpa voluptates consequuntur odio qui eius labore
          voluptate facere veniam tempora at. Ipsam dicta nobis ullam asperiores
          amet, dignissimos beatae culpa et iusto incidunt ad. Earum, quo fuga
          doloremque aliquam inventore id nam nemo.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          laboriosam voluptate saepe id illo, recusandae porro debitis iste
          facere tenetur itaque beatae perferendis, nostrum modi sequi ullam hic
          ex, est sed eos deserunt. Fugit iste esse quis illum excepturi
          incidunt accusantium facilis, illo dicta asperiores atque alias
          laboriosam qui necessitatibus laudantium tenetur deleniti repellendus?
          Iusto similique culpa provident? Omnis, excepturi vero porro dolor
          ducimus, quos fugiat dolorum iusto, quis ab ratione a similique
          voluptates exercitationem. Dignissimos quae totam reiciendis nostrum!
        </p>
      </div>
      <hr />
      <div className='container py-6 space-y-6'>
        <h1 className='font-extrabold text-4xl mb-6'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card>
            <CardHeader className='space-y-6'>
              <CardTitle className='text-base'>Test project</CardTitle>
              <div className='w-full h-[200px] bg-gray-500 rounded'></div>
              <CardDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugiat, earum?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                <Badge>Node.js</Badge>
                <Badge>TypeScript</Badge>
              </div>
              <div className='text-base mt-4 flex gap-4'>
                <a className='underline' href='#'>
                  <LinkIcon className='w-4 h-4 inline mr-1' />
                  Demo
                </a>
                <a className='underline' href='#'>
                  <CodeIcon className='w-4 h-4 inline mr-1' />
                  Code
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='space-y-6'>
              <CardTitle className='text-base'>Test project</CardTitle>
              <div className='w-full h-[200px] bg-gray-500 rounded'></div>
              <CardDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugiat, earum?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                <Badge>Node.js</Badge>
                <Badge>TypeScript</Badge>
              </div>
              <div className='text-base mt-4 flex gap-4'>
                <a className='underline' href='#'>
                  <LinkIcon className='w-4 h-4 inline mr-1' />
                  Demo
                </a>
                <a className='underline' href='#'>
                  <CodeIcon className='w-4 h-4 inline mr-1' />
                  Code
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <hr />
      <div className='container py-6 space-y-6 min-h-[calc(100vh-6rem)]'>
        <h1 className='font-extrabold text-4xl mb-6'>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facilis
          architecto inventore, rem qui nostrum laborum eum error? Dolorum
          corporis necessitatibus delectus repellat laudantium, ullam suscipit
          aliquid, hic quam laborum exercitationem? Harum, quia dolorum
          asperiores sequi ipsa modi saepe aut veritatis eveniet animi repellat
          placeat sunt, culpa voluptates consequuntur odio qui eius labore
          voluptate facere veniam tempora at. Ipsam dicta nobis ullam asperiores
          amet, dignissimos beatae culpa et iusto incidunt ad. Earum, quo fuga
          doloremque aliquam inventore id nam nemo.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          laboriosam voluptate saepe id illo, recusandae porro debitis iste
          facere tenetur itaque beatae perferendis, nostrum modi sequi ullam hic
          ex, est sed eos deserunt. Fugit iste esse quis illum excepturi
          incidunt accusantium facilis, illo dicta asperiores atque alias
          laboriosam qui necessitatibus laudantium tenetur deleniti repellendus?
          Iusto similique culpa provident? Omnis, excepturi vero porro dolor
          ducimus, quos fugiat dolorum iusto, quis ab ratione a similique
          voluptates exercitationem. Dignissimos quae totam reiciendis nostrum!
        </p>
      </div>
    </main>
  );
}
