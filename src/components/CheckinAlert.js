import CheckInVenue from './CheckIn.js'

function CheckinAlert({ setShowAlert, venue }) {
 
     
        return (
            <div class="rounded-md bg-brand-beau-blue p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </div>
                <div class="ml-3">
                <p class="text-sm font-medium font-bebas-neue text-brand-dark-blue">
                    You're Checked In at {venue}!
                </p>
                </div>
                <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                    <button onClick={() =>setShowAlert(false)} type="button" class="inline-flex rounded-md p-1.5 text-brand-dark-blue hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                    <span class="sr-only">Dismiss</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        )
    
}










export default CheckinAlert