<template>
    <div>
        <div v-for="day in days">{{day}}</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                month : 5,
                year : 2017
            }
        },
        computed : {
            days () {
                // Generate days in the current month
                let days = [];
                let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D')
                do {
                    days.push(currentDay);
                    currentDay = this.$moment(currentDay).add(1,'days')
                } while ((currentDay.month() + 1) === this.month)
                // Add previous days to beginning
                currentDay = this.$moment(days[0])
                
                const MONDAY = 1;
                const SUNDAY = 0;
                
                do {
                    currentDay = this.$moment(currentDay).subtract(1,'days')
                    days.unshift(currentDay)
                } while (currentDay.day() !== MONDAY)
                return days
            }
        }
    }
</script>