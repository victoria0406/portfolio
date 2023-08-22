import Image from 'next/image';

const projects = [,
  { title: '제목제목제목', time: "2023-08-22",desc: '설명설명설명', stack: ['Next.js', 'TailwindCSS', 'React'], image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
  { title: '제목제목제목', time: "2023-08-22",desc: '설명설명설명', stack: ['Next.js', 'TailwindCSS', 'React'], image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
  { title: '제목제목제목', time: "2023-08-22",desc: '설명설명설명', stack: ['Next.js', 'TailwindCSS', 'React'], image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
  { title: '제목제목제목', time: "2023-08-22",desc: '설명설명설명', stack: ['Next.js', 'TailwindCSS', 'React'], image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
  { title: '제목제목제목', time: "2023-08-22",desc: '설명설명설명', stack: ['Next.js', 'TailwindCSS', 'React'], image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
]

export default function Home() {
  return (
    <main>
      <div className='absolute top-0 select-none w-full'>
        <div className='flex flex-col justify-center h-screen pl-12 text-primary-800'>
          <p className='text-4xl mb-12'><b>C</b>ode, <b>C</b>reate, <b>C</b>aptivate</p>
          <p className='text-6xl font-bold'>My Front-End Journey</p>
        </div>
        {/*<div className='flex flex-col justify-center h-screen px-8 bg-primary-300'>
          <div className='flex justify-between items-center mb-12'>
            <h1 className='text-4xl font-bold text-primary-900 '>Lastest Projects</h1>
            <div className='text-primary-500'>
              More Projects{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                -&gt;
              </span>
            </div>
          </div>
          <div 
            className='flex justify-between'
          >
            {projects.map(({title, time, desc, stack, image}:{title:string, time:string, desc:string, stack:string[], image:string}, i:number)=>(
              <div
                key={i}
                className='h-96 w-64 rounded-lg relative shadow-lg p-2 bg-primary-50 w-screen'
              >
                <div className='relative h-1/2'>
                  <Image src={image} alt={title} fill style={{objectFit:"cover"}}/>
                </div>
                <div className='mt-4'>
                  <h2 className='font-bold text-lg'>{title}</h2>
                  <hr className='mt-2 mb-2 border-primary-400'/>
                  <p className='text-sm text-primary-600'>{time}</p>
                  <p>{desc}</p>
                </div>
                <div className='flex gap-2 absolute bottom-2 left-2'>
                  {stack.map((s, si)=>(
                    <span
                      key={si}
                      className='bg-primary-400 px-2 py-1 rounded'
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
                  */}
      </div>
    </main>
  )
}
