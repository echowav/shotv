<script lang="ts">
  async function captureVideo() {
    try {
      const [tab] = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });

      if (!tab.id) throw new Error("No active tab found");

      await browser.tabs.sendMessage(tab.id, { type: "CAPTURE_VIDEO" });
    } catch (e) {
      console.error("Failed to capture video:", e);
    }
  }
</script>

<main class="shotv-popup">
  <h3>Shotv</h3>
  <button onclick={captureVideo}>Capture Video</button>
</main>

<style>
  .shotv-popup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2rem;
    border-radius: 12px;
  }
</style>
