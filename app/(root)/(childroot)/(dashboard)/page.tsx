'use client'
import moment from "moment";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import { cronitorSampleData, render_arr } from "@/utils/data/data";

const Render_Data = ({ data }: RenderDataProps) => {
  const { attributes: { site: { ssl, dns } }, request, platform, schedule, public_badge_url } = data
  return (
    <div className="mt-24 text-slate-700 ">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 space-y-4">
          <div className="grid grid-cols-4 gap-4 ">
            {
              render_arr.map(({ label, key, type, render_value }, ind) => {
                const extractedVal = render_value ? render_value(data) : (data as any)[key]
                return <div key={ind} className="bg-gray-100/75 py-2 px-3 rounded-md space-y-3">
                  <h1 className="text-lg font-bold" >
                    {label}
                  </h1>
                  {type === 'image' ? <h1 className="text-green-500 font-bold">
                    <img src={extractedVal} />
                  </h1> : <h1>{extractedVal}</h1>}
                </div>
              }
              )
            }
          </div>
          <div className="bg-gray-100/75 py-2 px-3 rounded-md">
            <h1 className="mb-3  text-2xl">
              SSL
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <dl>
                <dt className="font-bold">
                  Issued to
                </dt>
                <dd>{ssl.issued_to}</dd>
              </dl>
              <dl>
                <dt className="font-bold">
                  Issued By
                </dt>
                <dd>{ssl.issued_by}</dd>
              </dl>
              <dl>
                <dt className="font-bold">
                  Issued at
                </dt>
                <dd>{moment(ssl.issued_at).format('DD/MM/YYYY, h:mm A')}</dd>
              </dl>
              <dl>
                <dt className="font-bold">
                  Expires at
                </dt>
                <dd>{moment(ssl.expires_at).format('DD/MM/YYYY, h:mm A')}</dd>
              </dl>
            </div>
          </div>
          <div className="bg-gray-100/75 py-2 px-3 rounded-md">
            <h1 className="mb-3  text-2xl">
              DNS
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <dl>
                <dt className="font-bold">
                  Name
                </dt>
                <dd>{dns.name}</dd>
              </dl>
              <dl>
                <dt className="font-bold">
                  Expires at
                </dt>
                <dd>{moment(dns.expires_at).format('DD/MM/YYYY, h:mm A')}</dd>
              </dl>
              <dl>
                <dt className="font-bold">
                  Registrar
                </dt>
                <dd>{dns.registrar}</dd>
              </dl>
              <dl className="col-span-4">
                <dt className="font-bold">
                  Server Name
                </dt>
                <dd>{dns.name_servers.map((name: string, ind: number) => <p key={ind}>{name}</p>)}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-gray-100/75 rounded-lg px-3 py-5">
          <h1 className="mb-3  text-2xl">
            Monitor Details
          </h1>
          <div className="space-y-6">
            <dl>
              <dt className="font-bold">
                Request
              </dt>
              <dd> <span className="rounded-md bg-slate-700 px-3 py-1 text-white text-xs ">GET</span> <span>{request?.url}</span></dd>
            </dl>
            <div className="grid grid-cols-2 gap-4">
              <dl>
                <dt className="font-bold">
                  Interval
                </dt>
                <dd> <span>{schedule}</span></dd>
              </dl>
              <dl>
                <dt className="font-bold">
                  Protocol
                </dt>
                <dd> <span>{platform}</span></dd>
              </dl>
              <dl>
                <dt className="font-bold">
                  Request Timeout
                </dt>
                <dd> <span>{request.timeout_seconds} seconds</span></dd>
              </dl>
              <dl>
                <dt className="font-bold">
                  Headers
                </dt>
                <dd> <span>{Object.keys(request.headers).length || 'none'}</span></dd>
              </dl>
              <dl className="col-span-2">
                <dt className="font-bold">
                  Locations
                </dt>
                <div className="flex items-center space-x-3 flex-wrap">
                  {
                    request?.regions?.map((region: string, index: number) => <dd key={index}> <span className="rounded-md bg-slate-700 px-3 py-1 text-white text-sm ">{region}</span></dd>)
                  }
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  const [loading, setLoading] = useState(false)

  return <>
    {loading ? <div className="grid place-items-center h-screen w-full"><Spinner color="info" aria-label="Info spinner example" size='lg' /> </div> : cronitorSampleData ? <Render_Data data={cronitorSampleData.monitors[0]} /> : <div className="grid place-items-center h-screen w-full">
      <h1 className="text-red-500 text-xl">
        Somethig Went wrong!
      </h1>
    </div>}

  </>
};

export default Page;
