<script context="module">
  import data from '../json/subjects.json';

    export async function load(page, session) {
      return {
			  status: 301,
        redirect: `/${data["metadata"]["default_language"]}`
      }
    }
 </script>
