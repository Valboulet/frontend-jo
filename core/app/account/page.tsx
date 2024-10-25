import { PaperClipIcon } from '@heroicons/react/20/solid'

const Account = () => {
  return (
  <div className="flex min-h-[80vh] w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
    <div className="flex mx-auto max-w-7xl flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Compte</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Nom complet</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Jean Pilou</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Adresse e-mail</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">jeanpilou@exemple.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Commandes</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">jeanpilou@exemple.com | 25/10/2024 | 14:27:58</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Tickets</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">athletisme02/08/2024.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                      </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Télécharger
                      </a>
                  </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">handball03/08/2024.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                      </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Télécharger
                      </a>
                  </div>
                  </li>
              </ul>
              </dd>
          </div>
          </dl>
      </div>
      </div>
    </div>
  )
}

export default Account;